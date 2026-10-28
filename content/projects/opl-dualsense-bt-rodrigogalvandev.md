---
name: OPL-DualSense-BT
slug: opl-dualsense-bt-rodrigogalvandev
summary: >-
  OPL fork that lets you use a DualSense wirelessly on your PS2 through PADEMU.
  Also adds a “Search” button so you can pair DS4/DualSense pads over Bluetooth
  right from the OPL menu, no USB cable needed
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
  repository: rodrigoGalvanDev/OPL-DualSense-BT
  repositoryId: '1414117808'
repository:
  archived: false
  defaultBranch: dualsense-bt
  stars: 2
  forks: 1
  lastCommit: '2026-10-22T01:03:37Z'
latestRelease:
  tag: '1.1'
  name: 'v1.1: Improve a little bit latency of DualSense'
  publishedAt: '2026-10-12T20:18:09Z'
  url: 'https://github.com/rodrigoGalvanDev/OPL-DualSense-BT/releases/tag/1.1'
activity:
  lastSynchronized: '2026-10-28T08:33:22.562Z'
automation:
  sync: true
  github:
    repoEtag: W/"047742780dcbc93deb70f36cd85cc32b16725327e3a43d0c16d833a5d442dba3"
    releasesEtag: W/"f4bfffbf73272c52ed0f0eed2dd70f9d4f1e8a49706a704a46bccffc8cdd569b"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
