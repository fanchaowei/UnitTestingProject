import { glob } from 'glob'
import fs from 'fs/promises'
import { build } from 'esbuild'

// 查找所有符合 *.spec.js 的文件
const filesPath = glob.sync('*.spec.js')

for (const filePath of filesPath) {
  // 读取文件内容
  const fileContent = await fs.readFile(filePath, 'utf-8')
  // 打包并执行, 注意我们自己加上 run() 的调用
  runModule(fileContent + `import { run } from './core.js'; run()`)
}

// 通过 esbuild 编译文件内容，即将文件 import 的内容一起打包进测试文件内
async function runModule(fileContent) {
  // 获得打包后的内容
  const res = await build({
    stdin: {
      contents: fileContent, // 读取的文件内容
      resolveDir: process.cwd(), // 当前目录路径
    },
    write: false, // write 开启则会写入文件，我们不需要写入文件
    bundle: true, // bundle 开启则会将所有依赖打包成一个文件
    target: 'esnext',
  })
  // 执行打包后的内容
  // res.outputFiles[0].text 为打包后的代码内容
  new Function(res.outputFiles[0].text)()
}
