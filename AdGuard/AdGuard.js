// https://github.com/yqc007/QuantumultX/blob/master/AdGuardProCrack.js

var body = $response.body,
  obj = JSON.parse(body)
obj = {
  products: [
    {
      product_id: 'com.adguard.lifetimePurchase',
      premium_status: 'ACTIVE',
    },
  ],
}
body = JSON.stringify(obj)
$done({ body: body })
