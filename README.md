# internet-filter-tools 🦹🏻

🖥️ Command-line tools that ease the day for administrators of Fortigate and 
LightSpeed Filter Internet filters. I am slowly fixing up my private tools and
adding them to this public repo.

The Fortigate functionality is tested with FortiOS 7.2, which is the current 
[Fortinet recommended release](https://community.fortinet.com/t5/FortiGate/Technical-Tip-Recommended-Release-for-FortiOS/ta-p/227178), but it will probably work on older and 
newer versions, as well.

## Installation

1. Clone this repo.
2. If you want to use the Fortigate stuff, [get a Fortigate REST API token](https://registry.terraform.io/providers/fortinetdev/fortios/latest/docs/guides/fgt_token) from your Fortigate device.
3. If you want to use the LightSpeed Filter stuff, get a LightSpeed token from 
your cloud instance. (TBD)
4. Copy `config.js-sample` to `config.js` and change the values to your
   environment. 
   - You should use FQDNs along with a valid SSL certificate or you may run
     into certificate errors. FortiOS 7.0 and beyond [support Let's Encrypt
     certificates with automatic renewal](https://docs.fortinet.com/document/fortigate/7.0.0/new-features/822087/acme-certificate-support).

## Tools

### fg-get-ratings.js

Purpose: Get the Fortiguard rating for a given URL.

Usage: `node ./fg-get-ratings.js "example.com"` or even `node ./fg-get-ratings.js "https://www.example.com/thing?arg=1"`.

## Links

- [Fortigate ACME certificate support](https://docs.fortinet.com/document/fortigate/7.0.0/new-features/822087/acme-certificate-support)
- [FortiOS Recommended Releases](https://community.fortinet.com/t5/FortiGate/Technical-Tip-Recommended-Release-for-FortiOS/ta-p/227178)

## FAQs

### How do I get more access to the Fortigate API documentation?
Answer: Contact your Fortinet rep 💁🏻‍♂️ and ask for access to the [Fortinet Developer Network website](https://fndn.fortinet.net). I am unable to help you with this.

## License

This project is licensed under the terms of the MIT license.
