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
  stars: 3
  forks: 2
  lastCommit: '2026-10-31T21:06:06Z'
latestRelease:
  tag: '1.2'
  name: 'v1.2: DS4 clones, Realtek dongles, Controller Setup, multitap'
  publishedAt: '2026-10-31T20:40:03Z'
  url: 'https://github.com/rodrigoGalvanDev/OPL-DualSense-BT/releases/tag/1.2'
activity:
  lastSynchronized: '2026-11-27T08:35:04.215Z'
automation:
  sync: true
  github:
    repoEtag: W/"dbdbebcdb87ae0c3977804e2273b6e3991f9d1bed29b0adb76cbaf5b250a333e"
    releasesEtag: W/"e85b4c4166f05736e02b8ecb06e0d92ebc66f6e9883ee6157bd979b215fc53c7"
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
