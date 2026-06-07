const DEFAULT_TRANSFORM = 'w_800,f_auto,q_auto'

export function cloudinaryUrl(src, transform = DEFAULT_TRANSFORM) {
  if (!src || !src.includes('res.cloudinary.com')) return src

  const [base, rest] = src.split('/upload/')
  if (!rest) return src

  const firstSegment = rest.split('/')[0]
  // Skip if a transform is already applied (e.g. "w_800,f_auto/...").
  // Versions ("v123/...") and bare paths ("portfolio/...") both get a transform injected.
  if (/^[a-z]+_/.test(firstSegment) || firstSegment.includes(',')) return src

  return `${base}/upload/${transform}/${rest}`
}
