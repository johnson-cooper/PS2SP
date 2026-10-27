---
name: Open-PS2-Loader
slug: open-ps2-loader-calos9999
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
  repository: calos9999/Open-PS2-Loader
  repositoryId: '938142402'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-06-19T11:05:54Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-06-19T11:05:55Z'
  url: 'https://github.com/calos9999/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-27T10:35:37.356Z'
automation:
  sync: true
  github:
    repoEtag: W/"f2a88512606b974bb04b5b3ca5855d6d61699ce5974f4c07f8f7dbff16eb47b2"
    releasesEtag: W/"4a9411b5a424bdfe27f362ecf3f1c076242c17e2c4a78c11cf8960893e376153"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
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
