---
name: SPC970-MechaLIBerator
slug: spc970-mechaliberator
summary: "Arduino-based hardware tool for dumping the internal ROM and EEPROM of the Sony SPC970 MechaCon chip."
categories:
  - hardware
  - utilities
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: Libbers/SPC970-MechaLIBerator
  repositoryId: '1376056342'
  url: 'https://github.com/Libbers/SPC970-MechaLIBerator'
repository:
  archived: false
  defaultBranch: main
  stars: 31
  forks: 0
  lastCommit: '2026-09-19T02:01:12Z'
latestRelease:
  tag: v0.1.0-beta.1
  name: SPC970-MechaLIBerator v0.1.0-beta.1
  publishedAt: '2026-09-19T02:01:13Z'
  url: 'https://github.com/Libbers/SPC970-MechaLIBerator/releases/tag/v0.1.0-beta.1'
activity:
  lastChecked: '2026-09-29T00:27:55.629Z'
  lastSynchronized: '2026-10-01T18:56:07.713Z'
automation:
  sync: true
  github:
    repoEtag: W/"fccf77efe875f1d4fa40ae4f5ac68654839d631feacfeaeecda5a2994bfc68d5"
    releasesEtag: W/"052714d0eba3104e24a085b1b087fb2db5c8532c6bbd5dbfed9e38d177a3447f"
discovery:
  method: 'pending-promotion:github-search'
  confidence: 90
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - native build files present
    - published GitHub release present
    - release contains an ELF
    - repository pushed within the last 180 days
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
