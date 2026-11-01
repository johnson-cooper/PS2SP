---
name: PCSX2-Userspace-LAN
slug: pcsx2-userspace-lan-khant735
summary: >-
  Experimental PCSX2 fork adding a userspace DEV9 Ethernet backend for local
  multi-instance PS2 LAN emulation without TAP/TUN or root privileges.
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://pcsx2.net'
source:
  provider: github
  repository: khant735/PCSX2-Userspace-LAN
  repositoryId: '1414720427'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-11T23:49:41Z'
latestRelease:
  tag: v2.9.31-userspace-lan-dev1
  name: PCSX2 v2.9.31 – Userspace LAN (Linux x64) – Development Build 1
  publishedAt: '2026-10-11T22:14:56Z'
  url: >-
    https://github.com/khant735/PCSX2-Userspace-LAN/releases/tag/v2.9.31-userspace-lan-dev1
activity:
  lastSynchronized: '2026-11-01T19:41:34.021Z'
automation:
  sync: true
  github:
    repoEtag: W/"68393de363995ff85f0fc9397ae4d7a3adbe205fce77dcec856ee460547266e4"
    releasesEtag: W/"619e7b271192ddf5103b492ab27b35f0b3a12d8b45ed5569250e6b38ae071e6c"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README identifies PS2 homebrew
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
