---
name: ps2-kinhank-bridge
slug: ps2-kinhank-bridge
summary: >-
  Experimental Kinhank USB wireless controller bridge for Dragon Quest VIII from
  disc on a real PS2. Tested V11 binary, source and Free McBoot autoboot setup.
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: snozcorp/ps2-kinhank-bridge
  repositoryId: '1423860939'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-18T00:45:01Z'
latestRelease:
  tag: v11
  name: V11
  publishedAt: '2026-10-18T00:45:01Z'
  url: 'https://github.com/snozcorp/ps2-kinhank-bridge/releases/tag/v11'
activity:
  lastSynchronized: '2026-10-22T10:12:26.003Z'
automation:
  sync: true
  github:
    repoEtag: W/"26b5a4f8acdf1eed0ad1641d9fd4d263a7a5e063c656937bf2ad64cf8e032394"
    releasesEtag: W/"6c9a41659b8fc2afef09d3dfd1dcdf353f1871b205f809bef869786be8729240"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
