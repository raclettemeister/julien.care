
# Fix Profile Photo Centering

## Problem
The circular avatar crop keeps showing the top of the photo (guitar headstock area) instead of the face. The `object-position` Y value has been incrementally adjusted but is still too low -- the face is in the lower portion of the original photo.

## Solution
Change `object-[28%_45%]` to approximately `object-[28%_75%]` (or even higher). The face appears to be roughly 70-80% down in the original photo, so the Y value needs a big jump, not small increments.

If `object-position` with `scale` continues to fight each other, an alternative approach is to wrap the image in an extra container and use `translate-y` to shift the image up, which gives more predictable control.

## Technical Details

**File:** `src/components/PostalCardModal.tsx` (line 17)

**Primary fix:** Change the image className to:
```
className="w-full h-full object-cover object-[28%_75%] scale-[2.2]"
```

**Fallback if still not working:** Replace `object-position` + `scale` with a wrapper approach:
```jsx
<div className="w-24 h-24 rounded-full bg-muted border border-border shrink-0 overflow-hidden cursor-pointer hover:ring-2 hover:ring-accent transition-all"
  onClick={() => setOpen(true)}>
  <img
    src={julienPhoto}
    alt="Julien Thibaut"
    className="w-[200%] h-[200%] object-cover -translate-x-[22%] -translate-y-[30%]"
  />
</div>
```

This wrapper approach uses percentage-based `translate` on an oversized image, giving direct pixel-level control over which part of the photo is visible -- no ambiguity from `object-position` + `scale` interactions.
