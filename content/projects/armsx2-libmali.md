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
  stars: 0
  forks: 0
  lastCommit: '2026-10-07T10:59:41Z'
latestRelease:
  tag: v0.1.1
  name: malisx2 0.1.1
  publishedAt: '2026-10-07T10:59:41Z'
  url: 'https://github.com/bmdhacks/malisx2/releases/tag/v0.1.1'
activity:
  lastChecked: '2026-09-30T16:31:42.278Z'
  lastSynchronized: '2026-10-07T16:27:43.824Z'
automation:
  sync: true
  github:
    repoEtag: W/"29fa239170cef14d52a546a541ca5017437e901cbf992becf76dc3d023932690"
    releasesEtag: W/"5110eb03ffaa2877591e7f979caccf609b3d733c0be158a328c20e9069e49016"
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
