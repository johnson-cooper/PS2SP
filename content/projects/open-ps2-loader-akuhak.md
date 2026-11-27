---
name: Open-PS2-Loader
slug: open-ps2-loader-akuhak
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
  repository: AKuHAK/Open-PS2-Loader
  repositoryId: '495953309'
repository:
  archived: false
  defaultBranch: master
  stars: 8
  forks: 0
  lastCommit: '2025-03-17T16:24:37Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-03-14T21:02:42Z'
  url: 'https://github.com/AKuHAK/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-27T19:00:38.220Z'
automation:
  sync: true
  github:
    repoEtag: W/"9fd1cc29e5965f4a98637ba6b4ab7879c51bd1f3251ec235747cf67cbfe3d993"
    releasesEtag: W/"6d70461df919eb12daaceb01ceda6a5e6effb23413b877030133cb4d35969f27"
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
