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
  stars: 31
  forks: 3
  lastCommit: '2026-10-23T02:27:36Z'
latestRelease:
  tag: v0.2.3
  name: malisx2 0.2.3
  publishedAt: '2026-10-22T23:08:06Z'
  url: 'https://github.com/bmdhacks/malisx2/releases/tag/v0.2.3'
activity:
  lastChecked: '2026-09-30T16:31:42.278Z'
  lastSynchronized: '2026-10-24T14:33:23.598Z'
automation:
  sync: true
  github:
    repoEtag: W/"70892f27c2cabb4253ca614a428eda0176d5f0f08ef2931763dcc8387909f2ab"
    releasesEtag: W/"bc28262a3a8523106c40d51ebc2d18b96a498614ce53b0969d8f96bc98e2333e"
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
