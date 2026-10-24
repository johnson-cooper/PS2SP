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
  stars: 32
  forks: 3
  lastCommit: '2026-10-24T16:59:05Z'
latestRelease:
  tag: v0.3.1
  name: Downhill Revived 0.3.1
  publishedAt: '2026-10-24T16:59:11Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.3.1'
activity:
  lastSynchronized: '2026-10-24T23:15:04.227Z'
automation:
  sync: true
  github:
    repoEtag: W/"b579b89375c50a8850e5373f4329c2223d0e4e0e2f742088e9e9086514b6779f"
    releasesEtag: W/"10070a0d4d3ec9a55c693547a0288f153b24023b3533bec52048a7cbd5e56064"
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
