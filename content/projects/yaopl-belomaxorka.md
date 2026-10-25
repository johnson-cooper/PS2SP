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
  lastSynchronized: '2026-10-25T19:39:30.321Z'
automation:
  sync: true
  github:
    repoEtag: W/"66dd29c74940d65c98e9090251f48ca9229cef2d394782ce0a8b65d4b83d8727"
    releasesEtag: W/"08b718886a5fa984c9bb5ea152a807bb7b9c9cf3c8f81115bcc13af60be67a7b"
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
