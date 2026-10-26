---
name: yaopl
slug: yaopl-belomaxorka
summary: >-
  YAOPL — Yet Another Open PS2 Loader: a fork of Open PS2 Loader (OPL) that
  continues its development. Game and app loader for PlayStation 2.
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
homepage: null
source:
  provider: github
  repository: belomaxorka/yaopl
  repositoryId: '1429972457'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-23T07:19:52Z'
latestRelease:
  tag: latest
  name: v1.2.0-Beta-2370-33a2b19-yaopl
  publishedAt: '2026-10-23T07:19:26Z'
  url: 'https://github.com/belomaxorka/yaopl/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-26T19:22:11.875Z'
automation:
  sync: true
  github:
    repoEtag: W/"9cd890fb40150b180afbe63d1af3de08160e1e07f283f3cf18985133aa27cd53"
    releasesEtag: W/"ab9decc20c8648ac4848bbbcb27e68c2c98d070783fc1e3a892c10097bec4a5c"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
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
