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
  lastSynchronized: '2026-10-21T10:10:07.264Z'
automation:
  sync: true
  github:
    repoEtag: W/"c5dc346efa4d0a16b23f39955127b46ac7590158dc3d39c5c678c60511cc9bb0"
    releasesEtag: W/"9bb04733d2f6d0bcf894f4a0b059930b0bcfdc852e1705fbe914d949c55f6a1b"
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
