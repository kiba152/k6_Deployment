// Creator: Grafana k6 Browser Recorder 1.0.1

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://dashboard-dev.elogii.com/#/operations/planning', function () {
    response = http.get('https://unpkg.com/html5-qrcode@2.1.6/html5-qrcode.min.js', {
      headers: {
        referer: 'https://dashboard-dev.elogii.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://dashboard-dev.elogii.com/favicon.png', {
      headers: {
        referer: 'https://dashboard-dev.elogii.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://api.mapbox.com/styles/v1/brisqq/ckkyyk5m333bc17mpber5qc72?optimize=true&access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          accept: 'application/json',
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v8.json?style=mapbox://styles/brisqq/ckkyyk5m333bc17mpber5qc72@1662998843773&secure&access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          accept: 'application/json',
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/styles/v1/brisqq/ckkyyk5m333bc17mpber5qc72/ck2u8j60r58fu0sgyxrigm3cu/sprite@2x.json?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          accept: 'application/json',
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/styles/v1/brisqq/ckkyyk5m333bc17mpber5qc72/ck2u8j60r58fu0sgyxrigm3cu/sprite@2x.png?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          accept: 'image/webp,*/*',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/fonts/v1/brisqq/DIN%20Offc%20Pro%20Regular,Arial%20Unicode%20MS%20Regular/0-255.pbf?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/fonts/v1/brisqq/DIN%20Offc%20Pro%20Regular,Arial%20Unicode%20MS%20Regular/8192-8447.pbf?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/fonts/v1/brisqq/DIN%20Offc%20Pro%20Italic,Arial%20Unicode%20MS%20Regular/0-255.pbf?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/fonts/v1/brisqq/DIN%20Offc%20Pro%20Italic,Arial%20Unicode%20MS%20Regular/8448-8703.pbf?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/fonts/v1/brisqq/DIN%20Offc%20Pro%20Medium,Arial%20Unicode%20MS%20Regular/0-255.pbf?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/fonts/v1/brisqq/DIN%20Offc%20Pro%20Medium,Arial%20Unicode%20MS%20Regular/8192-8447.pbf?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://events.mapbox.com/events/v2?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      '[{"event":"map.load","created":"2023-10-04T10:46:32.978Z","sdkIdentifier":"mapbox-gl-js","sdkVersion":"2.2.0","skuId":"01","userId":"9dd38435-1ae5-490a-a185-f76e3b619d03","skuToken":"101mjqnZx174K"}]',
      {
        headers: {
          'content-type': 'text/plain',
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/map-sessions/v1?sku=101mjqnZx174K&access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          'content-type': 'text/plain',
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://autosuggest.search.hereapi.com/v1/autosuggest?xnlp=CL_JSMv3.1.46.0&apikey=JfClkXTfVNYmVtk_jz7jPJawFXV4E3Q6ESBfUCXqvLg&limit=10&q=skee&lang=en-US&at=39.524902%2C16.3518935&in=countryCode%3AGBR',
      {
        headers: {
          accept: 'application/json',
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://autosuggest.search.hereapi.com/v1/autosuggest?xnlp=CL_JSMv3.1.46.0&apikey=JfClkXTfVNYmVtk_jz7jPJawFXV4E3Q6ESBfUCXqvLg&limit=10&q=skeena&lang=en-US&at=39.524902%2C16.3518935&in=countryCode%3AGBR',
      {
        headers: {
          accept: 'application/json',
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://discover.search.hereapi.com/v1/discover?xnlp=CL_JSMv3.1.46.0&apikey=JfClkXTfVNYmVtk_jz7jPJawFXV4E3Q6ESBfUCXqvLg&q=Skeena%20Hill%2C%20London%2C%20SW18%205%2C%20United%20Kingdom&at=38.71014896078624%2C-98.60787954719035&lang=en-US',
      {
        headers: {
          accept: 'application/json',
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/fonts/v1/brisqq/elogii-map-icons-v6%20Regular/0-255.pbf?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://api.mapbox.com/fonts/v1/brisqq/elogii-map-icons%20Regular/0-255.pbf?access_token=pk.eyJ1IjoiYnJpc3FxIiwiYSI6ImNsMjZleGt3NDAyamQzam5zdWc0N3A3ZzYifQ.JXRQzupozIeR858AGrHNEQ',
      {
        headers: {
          referer: 'https://dashboard-dev.elogii.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
