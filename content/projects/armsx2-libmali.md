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
  repository: bmdhacks/armsx2-libmali
  repositoryId: '1396628888'
  url: 'https://github.com/bmdhacks/armsx2-libmali'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-09-30T05:20:50Z'
latestRelease:
  tag: v0.0.1
  name: libmali 0.0.1
  publishedAt: '2026-09-30T05:20:50Z'
  url: 'https://github.com/bmdhacks/armsx2-libmali/releases/tag/v0.0.1'
activity:
  lastChecked: '2026-09-30T16:31:42.278Z'
  lastSynchronized: '2026-10-01T03:30:33.937Z'
automation:
  sync: true
  github:
    repoEtag: W/"b6e933c060428f4f6cd0fce4825a4c29166003c62c59e8b7f9ba4eff99178e1c"
    releasesEtag: W/"66a1979fb35f3788f3afab187d7b77a12e963c1589878e2ea4a6b108631a7a27"
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
