import { sendEmail } from './emailServer'
import { checkStock } from './inventoryServer'

export class OrderProcessor {
  processOrder(order: any) {
    const isOk = checkStock(order)
    if (isOk) {
      sendEmail()
    }
  }
}
