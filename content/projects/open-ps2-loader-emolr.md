---
name: Open-PS2-Loader
slug: open-ps2-loader-emolr
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
  repository: emolr/Open-PS2-Loader
  repositoryId: '613745190'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2023-03-16T11:12:13Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2023-03-16T11:12:14Z'
  url: 'https://github.com/emolr/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-26T13:08:34.937Z'
automation:
  sync: true
  github:
    repoEtag: W/"efccdee888803ea1e406b1288c67722945f12cea7c9c46c4e52ac829b7ec97dd"
    releasesEtag: W/"0ebffe0f674d93ca2e1d058b9cb2a7c122957986ee4033183aa426335c327d02"
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
