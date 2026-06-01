/**
 * Shared Nuxt UI `:ui` overrides so branded buttons/inputs match the bespoke
 * gradient/glass design while keeping component behaviour (loading-auto, a11y).
 */
const CTA = 'px-[24px] py-[14px] text-[15px] gap-[10px] rounded-full font-medium justify-center'
const PRIMARY_LOOK = 'text-white [background:var(--grad)] [background-size:160%_160%] shadow-[0_10px_30px_-10px_rgba(var(--accent-rgb),0.6)] hover:shadow-[var(--glow)] transition-[box-shadow]'
const GHOST_LOOK = '!text-text-base bg-[var(--surface-glass)] border border-border-strong backdrop-blur-[12px] hover:!bg-[var(--surface-glass)] hover:!text-text-base hover:border-[rgba(var(--accent-rgb),0.5)]'

// Full-size pill CTAs matching the design's .btn (14×24, 15px, 17px icon).
export const btnCtaUi = {
    base: `${CTA} ${PRIMARY_LOOK}`,
    leadingIcon: 'size-[17px]',
    trailingIcon: 'size-[17px]'
}
export const btnCtaGhostUi = {
    base: `${CTA} ${GHOST_LOOK}`,
    leadingIcon: 'size-[17px]',
    trailingIcon: 'size-[17px]'
}

// Project link buttons — small pills matching the design's .project .links a (9×14, 13px, 14px icon).
const PROJECT_LINK = 'px-[14px] py-[9px] text-[13px] gap-[7px] rounded-full justify-center font-medium'
export const btnProjectPrimaryUi = {
    base: `${PROJECT_LINK} text-white border border-transparent [background:var(--grad)]`,
    leadingIcon: 'size-[14px]',
    trailingIcon: 'size-[14px]'
}
export const btnProjectGhostUi = {
    base: `${PROJECT_LINK} bg-transparent border border-border-soft !text-text-muted hover:!text-text-base hover:border-border-strong hover:!bg-transparent`,
    leadingIcon: 'size-[14px]',
    trailingIcon: 'size-[14px]'
}

// Contact form fields — surface-2 fill, soft border, accent focus ring (matches the design inputs).
export const inputUi = {
    base: 'w-full bg-surface-2 text-text-base ring-0 border border-border-soft rounded-[var(--r-sm)] px-4 py-[13px] text-[14.5px] placeholder:text-text-faint transition-[border-color,box-shadow] focus-visible:border-[rgba(var(--accent-rgb),0.6)] focus-visible:ring-2 focus-visible:ring-[rgba(var(--accent-rgb),0.12)] aria-invalid:!border-[#FB7185] aria-invalid:focus-visible:!ring-[rgba(251,113,133,0.18)]'
}
export const formFieldUi = {
    label: 'font-mono text-[11px] tracking-[0.1em] uppercase text-text-faint mb-[6px]',
    error: 'font-mono text-[10.5px] text-[#FB7185] mt-[5px]'
}
