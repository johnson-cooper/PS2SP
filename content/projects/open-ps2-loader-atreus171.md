---
name: Open-PS2-Loader
slug: open-ps2-loader-atreus171
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
  repository: Atreus171/Open-PS2-Loader
  repositoryId: '1296566127'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-08-12T11:45:53Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-08-12T11:45:54Z'
  url: 'https://github.com/Atreus171/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-13T16:25:24.273Z'
automation:
  sync: true
  github:
    repoEtag: W/"b4d76d3ce361a607d1df47c584ee4b353eccff177aa3c8ac0d92ff7b0b1444c7"
    releasesEtag: W/"13fb5d712fa557920d448e2a94d08c0d42777e7664b3e5ae49e2616d012b1275"
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
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
