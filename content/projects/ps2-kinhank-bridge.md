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
  lastSynchronized: '2026-10-27T10:36:07.684Z'
automation:
  sync: true
  github:
    repoEtag: W/"965109f0d5a96f06c5c66beaa9360922b7008df0fcfe9730612b07d9dcd44c69"
    releasesEtag: W/"baa2d0b5c354f1c913ba4f089a52be9b2778dd936ccf233eae7aa627b663ff72"
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
