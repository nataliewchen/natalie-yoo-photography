// ---------------------------------------------------------------------------
// photos.js — your photo library
//
// HOW TO USE WITH CLOUDINARY:
//   1. Sign up at cloudinary.com (free tier is plenty for a portfolio)
//   2. Upload your photos to your Cloudinary media library
//   3. Paste the raw "Copy URL" link straight from Cloudinary into the
//      matching category array below, e.g.:
//      'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v123.../your-photo.jpg'
//
//   The Gallery injects `w_800,f_auto,q_auto` into each URL automatically so
//   Cloudinary serves an optimized WebP/AVIF at the right size. See
//   src/utils/cloudinary.js if you want to tweak the default transform.
//
//   ORDER: inside a category, the first N photos become the tops of the N
//   columns; greedy packing handles the rest to keep columns balanced.
//   The "All" filter round-robins through the categories (1st of each, then
//   2nd of each, etc.) so the grid stays mixed instead of clustering by type.
//
//   ALT TEXT comes from each category's `alt` field below (see `categories`).
// ---------------------------------------------------------------------------

export const couplesPhotos = [
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252384/portfolio/couples/2021-marshallbeach-5_ufpjwg.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252491/portfolio/couples/2023-redwoodgrove-2_jvfean.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252386/portfolio/couples/2025-halfmoonbay-1_bp6eub.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252487/portfolio/couples/2021-stanfordgarden-1_ca3qi9.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252475/portfolio/couples/2024-prayermountain-1_jqm6ya.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252425/portfolio/couples/2021-marshallbeach-3_wctvm2.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252360/portfolio/couples/2023-communicationshill-1_wfbw7v.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252492/portfolio/couples/2021-stanfordgarden-2_ue83hp.jpg',
  // 'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252387/portfolio/couples/2025-halfmoonbay-3_eviwb1.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252475/portfolio/couples/2024-prayermountain-3_jcdvoa.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252432/portfolio/couples/2023-dtlosaltos-1_bmsmow.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252352/portfolio/couples/2023-communicationshill-2_thjanp.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252378/portfolio/couples/2025-halfmoonbay-2_zb6m7n.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252442/portfolio/couples/2021-marshallbeach-1_uz9bwl.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252355/portfolio/couples/2023-redwoodgrove-3_knadsk.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252444/portfolio/couples/2021-marshallbeach-4_psgczo.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252497/portfolio/couples/2024-prayermountain-2_zrwumf.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252406/portfolio/couples/2023-redwoodgrove-1_mcmmqi.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779252443/portfolio/couples/2021-marshallbeach-2_q4ruos.jpg',
]


export const familyPhotos = [
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665863/portfolio/family/2023-ranchosanantonio-1_rzhllg.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665853/portfolio/family/2024-sunnyvale-2_emq6cu.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665856/portfolio/family/2024-ranchosanantonio-3_heyosg.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665870/portfolio/family/2025-losaltoshistorymuseum-2_gptn3u.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665878/portfolio/family/2025-guadalupeoakgrove-4_w2gzlm.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665881/portfolio/family/2026-saratoga-2_fi6kl3.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665865/portfolio/family/2025-guadalupeoakgrove-3_rzx0nf.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665869/portfolio/family/2023-alliedartsguild-1_oasovf.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665858/portfolio/family/2023-redwoodcity-2_qkff3z.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665854/portfolio/family/2024-sunnyvale-3_ak7kvi.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665876/portfolio/family/2025-ranchosanantonio-1_iv5gtp.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665878/portfolio/family/2026-saratoga-3_s1wesj.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665873/portfolio/family/2025-losaltoshistorymuseum-1_lel42m.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665882/portfolio/family/2024-ranchosanantonio-2_mqagur.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665855/portfolio/family/2024-sunnyvale-1_bsn7rc.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665861/portfolio/family/2023-ranchosanantonio-3_vkpnqx.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665873/portfolio/family/2024-redwoodcity-1_fubgzm.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665878/portfolio/family/2023-alliedartsguild.2_gz0cdj.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665860/portfolio/family/2023-ranchosanantonio-2_nzkrtd.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665881/portfolio/family/2026-saratoga-1_keqcx7.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665864/portfolio/family/2024-sunnyvale-4_sxgytq.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665866/portfolio/family/2025-guadalupeoakgrove-1_bxgblk.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665855/portfolio/family/2023-redwoodcity-1_nomtih.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665859/portfolio/family/2025-guadalupeoakgrove-2_chshmh.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665873/portfolio/family/2024-ranchosanantonio-1_qkxe1x.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779665860/portfolio/family/2025-ranchosanantonio-2_tics8i.jpg',
]

export const portraitsPhotos = [
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354578/portfolio/portraits/jw_wqwawv.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354577/portfolio/portraits/jd_zmgjtj.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354578/portfolio/portraits/cm_i1m5fp.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354579/portfolio/portraits/yc_zkwy86.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354580/portfolio/portraits/nsak_rg7jfy.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354578/portfolio/portraits/cr_cgaq0p.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354579/portfolio/portraits/qx_yvy0vb.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354580/portfolio/portraits/yn_bb8xls.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354580/portfolio/portraits/ycks_ykcmcf.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354578/portfolio/portraits/ak_wt7ejg.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354580/portfolio/portraits/rp_c2zdtu.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354578/portfolio/portraits/ms_ph4mkq.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646354577/portfolio/portraits/ej_h26z4w.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1646356737/portfolio/portraits/rc_uucnxv.jpg',
]

export const gradPhotos = [
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244819/portfolio/grad/2021-sjsu-2_ibskuu.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244855/portfolio/grad/2025-scu-2_egjtzw.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244875/portfolio/grad/2025-sjsu-1_rqvnpn.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244810/portfolio/grad/2021-ucla-1_fsnfhw.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244824/portfolio/grad/2021-saratoga-2_vhf8nk.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244697/portfolio/grad/2019-ucla-1_rzaril.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244905/portfolio/grad/2025-sjsu-4_wpfrnq.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244864/portfolio/grad/2021-ucla-3_kxzp5f.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244794/portfolio/grad/2021-sjsu-1_secxmp.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244837/portfolio/grad/2021-saratoga-3_gth5ih.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244789/portfolio/grad/2025-scu-3_wnbrww.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244788/portfolio/grad/2021-ucla-4_psqzbz.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244791/portfolio/grad/2021-sjsu-3_wv4kox.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244900/portfolio/grad/2025-sjsu-3_kuz41h.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244698/portfolio/grad/2019-ucla-2_cry5yw.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244905/portfolio/grad/2025-sjsu-2_x5ucva.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244906/portfolio/grad/2025-scu-1_syfmo3.jpg',
  // 'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244856/portfolio/grad/2021-ucla-2_chuuqw.jpg',
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1779244771/portfolio/grad/2021-saratoga-1_kppfbc.jpg',
]

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'couples', label: 'Couples', alt: 'Couple portrait' },
  { id: 'family', label: 'Family', alt: 'Family portrait' },
  { id: 'grad', label: 'Graduation', alt: 'Graduation portrait' },
  // { id: 'portraits', label: 'Portraits', alt: 'Portrait' },
]

const byCategory = {
  couples: couplesPhotos,
  family: familyPhotos,
  // portraits: portraitsPhotos,
  grad: gradPhotos,
}

// Returns photos for a category as { src, category } objects.
// For 'all', interleaves round-robin across categories so the 1st of each
// category lands first, then the 2nd of each, and so on.
export function photosFor(categoryId) {
  if (categoryId !== 'all') {
    return (byCategory[categoryId] || []).map((src) => ({ src, category: categoryId }))
  }

  const entries = Object.entries(byCategory)
  const max = Math.max(0, ...entries.map(([, urls]) => urls.length))
  const result = []
  for (let i = 0; i < max; i++) {
    for (const [cat, urls] of entries) {
      if (i < urls.length) result.push({ src: urls[i], category: cat })
    }
  }
  return result
}
