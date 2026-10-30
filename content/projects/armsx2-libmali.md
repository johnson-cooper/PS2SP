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
  stars: 49
  forks: 7
  lastCommit: '2026-10-30T01:49:46Z'
latestRelease:
  tag: v0.3.0
  name: malisx2 0.3.0
  publishedAt: '2026-10-28T23:10:43Z'
  url: 'https://github.com/bmdhacks/malisx2/releases/tag/v0.3.0'
activity:
  lastChecked: '2026-09-30T16:31:42.278Z'
  lastSynchronized: '2026-10-30T14:08:42.307Z'
automation:
  sync: true
  github:
    repoEtag: W/"9a22c6e1d6655d11ff3d56605b10641a9aad1d4e4dba4f5eb65cf596e6f9e849"
    releasesEtag: W/"3d0f347e26b6ed6fe5e435cc84e1bb59778c5dae9ca5e26ff1aacf2174f18af9"
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
