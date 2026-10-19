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
  stars: 15
  forks: 1
  lastCommit: '2026-10-14T19:28:15Z'
latestRelease:
  tag: v0.1.5
  name: malisx2 0.1.5
  publishedAt: '2026-10-14T19:28:15Z'
  url: 'https://github.com/bmdhacks/malisx2/releases/tag/v0.1.5'
activity:
  lastChecked: '2026-09-30T16:31:42.278Z'
  lastSynchronized: '2026-10-19T14:41:02.631Z'
automation:
  sync: true
  github:
    repoEtag: W/"1f4b0331d24c460145902379680b974b3e7fd38747ed724a657df0be4e9d3260"
    releasesEtag: W/"75caee43e2c75dbd346aada97b6cdb6723d5ee0a27682804a7f3a0fa467f49a2"
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
