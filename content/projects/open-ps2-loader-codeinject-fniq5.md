---
name: Open-PS2-Loader-CodeInject
slug: open-ps2-loader-codeinject-fniq5
summary: 'Game and app loader for Sony PlayStation 2, with Code Inject module'
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
  repository: fniq5/Open-PS2-Loader-CodeInject
  repositoryId: '778469374'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2024-03-31T17:27:46Z'
latestRelease:
  tag: ci-1.0.0
  name: OPL with Code Inject 1.0.0
  publishedAt: '2024-03-31T17:27:47Z'
  url: 'https://github.com/fniq5/Open-PS2-Loader-CodeInject/releases/tag/ci-1.0.0'
activity:
  lastSynchronized: '2026-10-16T12:25:43.640Z'
automation:
  sync: true
  github:
    repoEtag: W/"7abd96765f36dee6932461d0a5140f9802bbf07946b2b3e35edaeea25870942b"
    releasesEtag: W/"529ab43119fc8138cb6b6a5cd11f5e912ac2970cd0b36c05123dfe28370f2c8f"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: released-legacy
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
