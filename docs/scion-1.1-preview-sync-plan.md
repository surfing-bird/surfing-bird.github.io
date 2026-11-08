# Scion 1.1 Preview Sync Plan

Direction: **sourcebook → repository (MD 1.1 target)**. The repository TSX/PDF pages are authoritative; `The Scion Preview.ds-sourcebook` and `The Scion.ds-sourcebook` are brought in line with them for levels 1–3.

## Status key

- ✅ Already matches in repo
- 🔧 Needs repo fix
- 📘 Needs sourcebook update

---

## Mechanical differences

| Item | Change | Repo file(s) | Status |
|------|--------|--------------|--------|
| **Essence Lance** | Tier 1: `5 + R psychic`; all tiers psychic; target `One creature`; effect wording | `src/abilities/scion-abilities/EssenceLance.tsx` | ✅ |
| **Blink** | Spend cap `3 or fewer balance`; flavor `…And you miss it.` | `src/abilities/scion-abilities/Blink.tsx` | ✅ |
| **Cross Slash** | Add `Weapon` keyword; order `Area, Magic, Melee, Weapon` | `src/abilities/scion-abilities/CrossSlash.tsx` | ✅ |
| **Aether Lash** | Aloft rider requires `can't fly`; fix vertical-pull typo | `src/abilities/scion-abilities/AetherLash.tsx` | ✅ |
| **Veil Piercer** | Mist conceals you + allies | `src/abilities/scion-abilities/VeilPiercer.tsx` | ✅ |
| **Blade Barrier** | Target `Each enemy in the area` | `src/abilities/scion-abilities/BladeBarrier.tsx` | ✅ |
| **Sanguine Thread** | Target `One creature` | `src/abilities/scion-abilities/SanguineThread.tsx` | ✅ |
| **Reaper's Edge** | Target `One creature` | `src/abilities/scion-abilities/ReapersEdge.tsx` | ✅ |
| **Writ of Power** | Target `Special`; fix `yourself` typo | `src/abilities/scion-abilities/WritOfPower.tsx` | ✅ |

## Naming / description differences

| Item | Change | Repo file(s) | Status |
|------|--------|--------------|--------|
| **Phasewalk** | Rename from Phase Step; prose includes +1 disengage | `src/pages/scion-pages/2-Maneuvers.tsx`, `src/pages/scion-pages-pdf/Page2.tsx` | ✅ |
| **Crescent Arc** | Drop “does not create an actual wall” clause | `src/abilities/scion-abilities/CrescentArc.tsx` | ✅ |
| **Runebrand** | Flavor: “brand a volatile rune…” | `src/abilities/scion-abilities/Runebrand.tsx` | ✅ |
| **Blink** | Flavor added | `src/abilities/scion-abilities/Blink.tsx` | ✅ |
| **Arts blurbs + mantras** | Rewritten descriptions; all-caps mantras | `src/pages/scion-pages/1-Class-Subclass.tsx`, `src/pages/scion-pages-pdf/Page1.tsx` | ✅ |
| **Cut To The Core** | “foe's defenses”; “lower by 1” wording | `src/abilities/scion-abilities/CutToTheCore.tsx` | ✅ |

## Trivial wording / typos

| Item | Change | Repo file(s) | Status |
|------|--------|--------------|--------|
| **Enweave / Lightning Strike** | Drop “chosen” from chain text | `src/abilities/scion-abilities/Enweave.tsx` | ✅ |
| **Kit** | Fix “You can use and gain the benefits of a kit.” | `src/pages/scion-pages-pdf/Page1.tsx` | ✅ (web Kit page N/A) |
| **Sever The Moment** | Capitalize `The` | `src/abilities/scion-abilities/SeverTheMoment.tsx` | ✅ |
| **Horizon Step** | “teleport up to 10 squares” | `src/abilities/scion-abilities/HorizonStep.tsx` | ✅ |
| **Spectral Blades** | “Once on your turn” | `src/abilities/scion-abilities/SpectralBlades.tsx` | ✅ |
| **Writ of Power** | `yourself` (not `youreslf`) | `src/abilities/scion-abilities/WritOfPower.tsx` | ✅ |
| **Writ of Binding** | “coiling” (not “coling”) | `src/abilities/scion-abilities/WritOfBinding.tsx` | ✅ |
| **Class blurb** | Lowercase `scion` in body prose; keep “strike as lightning” (MD typo rejected) | `src/pages/scion-pages/1-Class-Subclass.tsx` | ✅ |

---

## Sourcebook files (levels 1–3)

Apply the same mechanical, naming, and typo changes to:

- `The Scion Preview.ds-sourcebook`
- `The Scion.ds-sourcebook` (matching sections only)

### Ability entries to update

- Essence Lance, Aether Lash, Blade Barrier, Crescent Arc, Cross Slash, Cut To The Core, Sever The Moment, Veil Piercer, Sanguine Thread, Reaper's Edge, Spectral Blades, Enweave (Lightning Strike line), Blink (nested), Runebrand (nested), Writ of Power (nested), Writ of Binding (nested), Horizon Step (nested)

### Class / subclass entries to update

- Class description (lowercase scion in body; keep correct “strike as lightning”)
- Kit feature description
- Blinkblade: Phasewalk rename + full description, Blink spend/description, art blurb + mantra
- Runewright: art blurb + mantra, Runebrand flavor
- Soulforged: art blurb + mantra

---

## Implementation order

1. ✅ Fix remaining repo ability/page files
2. ✅ Update both `.ds-sourcebook` files
3. ✅ Verify grep shows no stale sourcebook strings for levels 1–3 changed content
