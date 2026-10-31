---
name: Open-PS2-Loader
slug: open-ps2-loader-bignaux
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
  repository: bignaux/Open-PS2-Loader
  repositoryId: '362452728'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2025-11-26T14:42:11Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2023-03-01T09:11:03Z'
  url: 'https://github.com/bignaux/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-31T12:30:18.561Z'
automation:
  sync: true
  github:
    repoEtag: W/"9de69e95fa56fe293de724325d983de493313e74271b364c0b5068bfafc0a97d"
    releasesEtag: W/"09ad476afa9b2aaa4a94981628a46a4436d18ed47ed0d194e6e271dbf5aa03dd"
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
