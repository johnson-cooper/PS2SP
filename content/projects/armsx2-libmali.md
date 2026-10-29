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
  stars: 43
  forks: 5
  lastCommit: '2026-10-28T23:10:43Z'
latestRelease:
  tag: v0.3.0
  name: malisx2 0.3.0
  publishedAt: '2026-10-28T23:10:43Z'
  url: 'https://github.com/bmdhacks/malisx2/releases/tag/v0.3.0'
activity:
  lastChecked: '2026-09-30T16:31:42.278Z'
  lastSynchronized: '2026-10-29T14:20:06.661Z'
automation:
  sync: true
  github:
    repoEtag: W/"b039883d1309458a2c0882658647a69d3d6e85dc9c8ad40214227f1cd7c783e8"
    releasesEtag: W/"d3d2496e482f583197ff47c3a8e6d9bee37aba456c32c914e2c67b5327bfb115"
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
