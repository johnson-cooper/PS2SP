---
name: downhill-revived
slug: downhill-revived
summary: >-
  A PC port of Downhill Domination (PS2), built on a matching decompilation.
  Bring your own disc.
categories:
  - preservation
  - development
  - ports
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: 'https://downhill-revived.pages.dev'
source:
  provider: github
  repository: skuza-oss/downhill-revived
  repositoryId: '1423433613'
repository:
  archived: false
  defaultBranch: main
  stars: 176
  forks: 25
  lastCommit: '2026-11-06T19:33:08Z'
latestRelease:
  tag: v0.7.12
  name: Downhill Revived 0.7.12
  publishedAt: '2026-11-06T16:57:16Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.7.12'
activity:
  lastSynchronized: '2026-11-06T23:08:43.152Z'
automation:
  sync: true
  github:
    repoEtag: W/"5645be27f0c505abf7d7b756d42f41d52a71df7306d695d035b91e8f32c92610"
    releasesEtag: W/"fe70b7f1c949c6e6a008a107d4ebb9a19daf5370593ad55be38a0a98552c7510"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
