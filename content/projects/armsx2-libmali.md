---
name: armsx2-libmali
slug: armsx2-libmali
summary: >-
  Vulkan driver for Arm Mali (G615) on the stock kbase kernel driver, built for
  the ARMSX2 PS2 emulator
categories:
  - drivers
  - emulators
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: bmdhacks/malisx2
  repositoryId: '1396628888'
  url: 'https://github.com/bmdhacks/armsx2-libmali'
repository:
  archived: false
  defaultBranch: main
  stars: 12
  forks: 1
  lastCommit: '2026-10-14T19:28:15Z'
latestRelease:
  tag: v0.1.5
  name: malisx2 0.1.5
  publishedAt: '2026-10-14T19:28:15Z'
  url: 'https://github.com/bmdhacks/malisx2/releases/tag/v0.1.5'
activity:
  lastChecked: '2026-09-30T16:31:42.278Z'
  lastSynchronized: '2026-10-17T05:49:51.650Z'
automation:
  sync: true
  github:
    repoEtag: W/"67d2b04cc5022263388d126b36b7d4382ed09009c270983d6254f043153eb0d9"
    releasesEtag: W/"25e6f08c6cd71d890af7416ba0dda413f9cb3e8d62c7d132b5d3a7d666247308"
discovery:
  method: 'pending-promotion:incremental:ps2 in:name,description'
  confidence: 85
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
