---
name: Crash-Twinsanity-Windows
slug: crash-twinsanity-windows-gabriel-twobits
summary: >-
  Crash Twinsanity (PS2, PAL) running natively on Windows: a Windows port of
  HAB3X's Mac port of Smartkin's C++ decompilation. No game data included: bring
  your own disc image.
categories:
  - preservation
  - development
  - ports
  - games
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Gabriel-TwoBits/Crash-Twinsanity-Windows
  repositoryId: '1417850153'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-03T21:30:39Z'
latestRelease:
  tag: windows-32bit-test1
  name: Crash Twinsanity for 32 bit Windows (test 1)
  publishedAt: '2026-11-03T21:30:39Z'
  url: >-
    https://github.com/Gabriel-TwoBits/Crash-Twinsanity-Windows/releases/tag/windows-32bit-test1
activity:
  lastSynchronized: '2026-11-18T04:21:47.732Z'
automation:
  sync: true
  github:
    repoEtag: W/"98d20a20155c1af3cffe792ddbc2d6686a0a4459cd0be40d6a47d3df5f995e09"
    releasesEtag: W/"f08fdc559b0032f49ea31f5fa08477dd1557be99903d4e668ff30c20c7fcfaf6"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      GioPixelGH/Crash-Twinsanity-Windows
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: GioPixelGH/Crash-Twinsanity-Windows
  source: GioPixelGH/Crash-Twinsanity-Windows
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
