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
  stars: 1
  forks: 0
  lastCommit: '2026-11-18T15:48:37Z'
latestRelease:
  tag: watson-0.1.0-pcsx2-v2.9.97
  name: Watson 0.1.0 on PCSX2 v2.9.97
  publishedAt: '2026-10-05T14:46:01Z'
  url: >-
    https://github.com/JeanxPereira/Watson/releases/tag/watson-0.1.0-pcsx2-v2.9.97
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-11-19T03:30:47.591Z'
automation:
  sync: true
  github:
    repoEtag: W/"de64d8254cfa335894691e9a34f8165720bca13b900ff75778a301e0fa43832c"
    releasesEtag: W/"ab2cfbc5cf6aecdb540e53af172fbe23c9e9fdd76b7852fab465bc488cca208f"
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
