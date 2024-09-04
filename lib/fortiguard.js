"use strict";

import { fortigate_host, fg_api_token } from "../config.js";

/**
 * Get the FortiGuard URL rating for the specified URL. Note this will not
 * tell you if the URL has been locally-recategorized. For local recats, we
 * will want to query the /webfilter/ftgd-local-rating endpoint.
 * @param {string} url The URL to look up.
 * @return {json}  The API response as JSON.
 */
export async function checkFortiguardRating(url) {
  const fortiguardRatingForUrlPath =
    `/api/v2/monitor/utm/rating-lookup/select` +
    `?access_token=${fg_api_token}`;
  const fortiguardRatingUrl = `https://${fortigate_host}:443${fortiguardRatingForUrlPath}`;

  const bodyData = {
    url: url,
    lang: "en",
  };

  try {
    const response = await fetch(fortiguardRatingUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    if ("results" in jsonResponse) {
      return jsonResponse.results;
    } else {
      return null;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}

export async function getUtmAppLookupForHost(hostname) {
  return hostname; // FIXME: Stubbed for now.
}

/**
 * Get the FortiGuard Internet Service matches for the specified IP address.
 * @param {string} ip The IP address to look up.
 * @param {string} netmask The optional netmask (default: 255.255.255.255)
 * @return {json}  The API response as JSON.
 */
export async function getFortiguardInternetServiceMatch(
  ip,
  netmask = "255.255.255.255"
) {
  // If no IP is specified, bail.
  if (!ip) {
    throw new Error("IP address is required");
  }

  // Is the specific IP an IPv6 address or not?
  const isIpv6 = ip.includes(":");

  // https://fndn.fortinet.net/index.php?/fortiapi/1-fortios/4199/1/utm/
  const fortiguardISMPath =
    `/api/v2/monitor/firewall/internet-service-match` +
    `?ip=${ip}` +
    `&is_ipv6=${isIpv6}` +
    `&ipv4_mask=${netmask}` +
    `&access_token=${fg_api_token}`;
  const fortiguardISMUrl = `https://${fortigate_host}:443${fortiguardISMPath}`;

  try {
    const response = await fetch(fortiguardISMUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();
    return jsonResponse; // FIXME: Reformat this output.
  } catch (error) {
    console.error("Error:", error);
  }
}
