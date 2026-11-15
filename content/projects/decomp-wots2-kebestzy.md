---
name: decomp_wots2
slug: decomp-wots2-kebestzy
summary: Way of the Samurai 2 (PS2) — native Linux decompilation port
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: kebestzy/decomp_wots2
  repositoryId: '1458505505'
repository:
  archived: false
  defaultBranch: android-v106
  stars: 0
  forks: 0
  lastCommit: '2026-11-15T14:04:35Z'
latestRelease:
  tag: v1.0.18
  name: v1.0.18 — Perbaikan black screen (FBO rusak saat rotasi)
  publishedAt: '2026-11-15T14:04:36Z'
  url: 'https://github.com/kebestzy/decomp_wots2/releases/tag/v1.0.18'
activity:
  lastSynchronized: '2026-11-15T21:49:51.900Z'
automation:
  sync: true
  github:
    repoEtag: W/"bd63e2453e1e1db3a59e08b19c2da3346052931b36f2243526a6da268d296afc"
    releasesEtag: W/"aac3b6640ad5cd6386dd3751bb63009c9c4535f84b2c6f9008a3f9e91c59e8b3"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: acklavidian/decomp_wots2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: acklavidian/decomp_wots2
  source: acklavidian/decomp_wots2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
