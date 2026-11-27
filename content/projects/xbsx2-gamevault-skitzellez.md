---
name: XBSX2-GameVault
slug: xbsx2-gamevault-skitzellez
summary: >-
  XBSX2 (PlayStation 2) built for Game Vault: plays from any USB drive and keeps
  saves on it. Xbox Dev Mode.
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://wiki.sternserv.xyz/docs/emulation/xbsx2-guide'
source:
  provider: github
  repository: skitzellez/XBSX2-GameVault
  repositoryId: '1419907859'
repository:
  archived: false
  defaultBranch: gamevault
  stars: 2
  forks: 1
  lastCommit: '2026-11-25T05:46:42Z'
latestRelease:
  tag: gv-top-2.0.9.33
  name: XBSX2 for Game Vault 2.0.9.33 (self-update)
  publishedAt: '2026-11-25T05:46:42Z'
  url: 'https://github.com/skitzellez/XBSX2-GameVault/releases/tag/gv-top-2.0.9.33'
activity:
  lastSynchronized: '2026-11-27T19:02:17.386Z'
automation:
  sync: true
  github:
    repoEtag: W/"3ce1ce1db152becaa890bcebd25b391d7813c647cdbcf89f466956ebb9ef2f2b"
    releasesEtag: W/"9c89a7cd647cab029a604db4e95fa2347f6938c8272b33a23ac883f6d6ac8037"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: XboxEmulationHub/XBSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
