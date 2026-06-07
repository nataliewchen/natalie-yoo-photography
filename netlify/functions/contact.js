const RETOOL_WEBHOOK_URL =
  process.env.RETOOL_WEBHOOK_URL ||
  'https://api.retool.com/v1/workflows/ad3503a0-b02c-4ab7-b5a3-53010b6aee83/startTrigger'

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' }
  }

  try {
    const res = await fetch(RETOOL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: event.body,
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('Retool forwarding failed:', res.status, detail)
      return { statusCode: 502, body: 'Upstream workflow failed' }
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    console.error('Proxy error:', err)
    return { statusCode: 500, body: 'Request failed' }
  }
}
