---
name: Watson
slug: watson
summary: >-
  Instrumented PCSX2 with an MCP server: EE/IOP probes, GIF/GS and SPU2 traces,
  frame-exact captures for measuring PS2 software
categories:
  - emulators
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: JeanxPereira/Watson
  repositoryId: '1403842725'
  url: 'https://github.com/JeanxPereira/Watson'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-13T14:46:08Z'
latestRelease:
  tag: watson-0.1.0-pcsx2-v2.9.97
  name: Watson 0.1.0 on PCSX2 v2.9.97
  publishedAt: '2026-10-05T14:46:01Z'
  url: >-
    https://github.com/JeanxPereira/Watson/releases/tag/watson-0.1.0-pcsx2-v2.9.97
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-11-14T03:17:40.248Z'
automation:
  sync: true
  github:
    repoEtag: W/"e7e0251df94e9d2c3a1898bce2bbc232278183231dfc663e146f601db60b8242"
    releasesEtag: W/"4f743115b2e1c8a8cfd317aabc40a662b5624acbf77c497d94b9b0212e541cf8"
discovery:
  method: 'pending-promotion:incremental:ps2 in:name,description'
  confidence: 85
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
