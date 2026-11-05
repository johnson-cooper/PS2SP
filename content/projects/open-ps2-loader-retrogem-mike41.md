---
name: Open-PS2-Loader-RetroGem
slug: open-ps2-loader-retrogem-mike41
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
  repository: MiKE41/Open-PS2-Loader-RetroGem
  repositoryId: '910737426'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-07-28T02:56:53Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-07-28T02:56:53Z'
  url: 'https://github.com/MiKE41/Open-PS2-Loader-RetroGem/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-05T12:22:09.672Z'
automation:
  sync: true
  github:
    repoEtag: W/"afe259343607732f38b0912bc047db3e153d7ec17d169212b3c566ec2888eb87"
    releasesEtag: W/"a32366ff6357c3269f36622955145e2f00a3cb8a87241b925a1768dad69927f2"
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
