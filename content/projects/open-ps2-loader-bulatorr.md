---
name: Open-PS2-Loader
slug: open-ps2-loader-bulatorr
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
  repository: bulatorr/Open-PS2-Loader
  repositoryId: '741156907'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-14T08:47:31Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-04-07T12:28:34Z'
  url: 'https://github.com/bulatorr/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-05T03:30:46.641Z'
automation:
  sync: true
  github:
    repoEtag: W/"89935b8eacafe9b149c2dba9f138440ca982976f43256a3ee40f7ef280400e7b"
    releasesEtag: W/"76ec28c38d340e1a6790b090b052589f5fd37a7700cdff3015a8d6376d6a9b3e"
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
