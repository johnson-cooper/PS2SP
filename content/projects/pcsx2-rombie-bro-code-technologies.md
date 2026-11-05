---
name: pcsx2-rombie
slug: pcsx2-rombie-bro-code-technologies
summary: PCSX2 - The Playstation 2 Emulator - For use in a browser
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
  repository: Bro-Code-Technologies/pcsx2-rombie
  repositoryId: '1408259405'
repository:
  archived: false
  defaultBranch: rombie
  stars: 0
  forks: 0
  lastCommit: '2026-10-13T00:39:24Z'
latestRelease:
  tag: rombie-ps2-engine-2026.1.0
  name: Rombie PS2 Engine 2026.1.0
  publishedAt: '2026-10-13T00:42:46Z'
  url: >-
    https://github.com/Bro-Code-Technologies/pcsx2-rombie/releases/tag/rombie-ps2-engine-2026.1.0
activity:
  lastSynchronized: '2026-11-05T03:31:05.360Z'
automation:
  sync: true
  github:
    repoEtag: W/"2c8ee7b52a37e45092ff0581ce97eac0c52f9f053fcb2bab1d5c43dfddb36e3c"
    releasesEtag: W/"4567e6e20ee11634156ff5bd0eb5b25e109d9982e708b5e3457c170795fcc281"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release metadata identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
