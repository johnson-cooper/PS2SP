---
name: Open-PS2-Loader
slug: open-ps2-loader-minze25
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
  repository: MinZe25/Open-PS2-Loader
  repositoryId: '993902556'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-06-03T21:41:07Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-06-03T21:41:08Z'
  url: 'https://github.com/MinZe25/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-08T19:43:19.350Z'
automation:
  sync: true
  github:
    repoEtag: W/"db54271bc82bfcd5061ca2b95ebcfd4eff28aef9e445deef1f87d6a2227c284f"
    releasesEtag: W/"d8192c72be9d13485967e3c8523282779dd966dc47a62fbf00210f060aed0af4"
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
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
