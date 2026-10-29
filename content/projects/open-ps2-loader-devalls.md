---
name: Open-PS2-Loader
slug: open-ps2-loader-devalls
summary: Game and app loader for Sony PlayStation 2
categories:
  - loaders
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'https://ps2homebrew.github.io/Open-PS2-Loader/'
source:
  provider: github
  repository: devalls/Open-PS2-Loader
  repositoryId: '305426836'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-06-04T16:32:18Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2024-06-04T16:32:19Z'
  url: 'https://github.com/devalls/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-29T00:57:53.202Z'
automation:
  sync: true
  github:
    repoEtag: W/"3d01c166df63ef8f5ce435c06ddb754d7b20b797b4547c1e6b1338a8b4621a6c"
    releasesEtag: W/"9242aab0d18004d23b621966ecee9e939231bca50491bcebe0a2e631f768d661"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
