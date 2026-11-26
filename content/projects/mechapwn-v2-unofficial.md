---
name: MechaPwn-v2-unofficial
slug: mechapwn-v2-unofficial
summary: >-
  MechaPwn-v2-unofficial is a PlayStation 2 software project discovered by
  PS2SP.
categories:
  - boot-tools
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: amxcs/MechaPwn-v2-unofficial
  repositoryId: '1419202056'
  url: 'https://github.com/amxcs/MechaPwn-v2-unofficial'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 1
  lastCommit: '2026-10-14T16:29:12Z'
latestRelease:
  tag: force-unlock-v2-r1
  name: Force unlock v2 (r1)
  publishedAt: '2026-10-14T16:29:12Z'
  url: >-
    https://github.com/amxcs/MechaPwn-v2-unofficial/releases/tag/force-unlock-v2-r1
activity:
  lastChecked: '2026-10-14T18:54:17.306Z'
  lastSynchronized: '2026-11-26T05:05:08.616Z'
automation:
  sync: true
  github:
    repoEtag: W/"f17a0088bdd937c79ce6c33a0ba47613d9c26fed7240bf7732fe5757060c1b56"
    releasesEtag: W/"ba4912201f427adf497cc865118857115f3392298206ede85c5fc7f27c71bda3"
discovery:
  method: 'pending-promotion:incremental:"PS2 homebrew" in:name,description,readme'
  confidence: 90
  evidence:
    - README explicitly mentions PlayStation 2
    - README identifies PS2 homebrew
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: MechaResearch/MechaPwn
  source: MechaResearch/MechaPwn
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
