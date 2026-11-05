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
  lastCommit: '2026-11-04T14:42:54Z'
latestRelease:
  tag: watson-0.1.0-pcsx2-v2.9.97
  name: Watson 0.1.0 on PCSX2 v2.9.97
  publishedAt: '2026-10-05T14:46:01Z'
  url: >-
    https://github.com/JeanxPereira/Watson/releases/tag/watson-0.1.0-pcsx2-v2.9.97
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-11-05T03:32:12.510Z'
automation:
  sync: true
  github:
    repoEtag: W/"4cedc66017b58a8670e3f68891ddeb478d2e70a3b2a6d63ca7be6f5400ccbc7c"
    releasesEtag: W/"b729f309ec07c74e5b02912bdf832fe86d91e2824c2cfc4316964d1ed552f6ae"
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
