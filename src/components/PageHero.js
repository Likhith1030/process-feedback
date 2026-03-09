/**
 * PageHero – reusable hero banner with decorative stacked ellipses.
 * Used on Contact, Team, Research, and Teacher Guides pages.
 *
 * Props:
 *   title     – main heading text
 *   subtitle  – optional subtitle paragraph
 */

// Ellipse layer data (width%, top%, left%, rgb color, opacity)
const ELLIPSE_LAYERS = [
  { w: "155%", t: "33%",  l: "-28%", rgb: "229,236,251", o: 0.03 },
  { w: "146%", t: "38%",  l: "-23%", rgb: "226,234,251", o: 0.10 },
  { w: "137%", t: "43%",  l: "-19%", rgb: "222,233,252", o: 0.17 },
  { w: "128%", t: "48%",  l: "-14%", rgb: "218,231,252", o: 0.24 },
  { w: "119%", t: "53%",  l: "-10%", rgb: "215,229,252", o: 0.31 },
  { w: "110%", t: "58%",  l: "-5%",  rgb: "211,227,252", o: 0.38 },
  { w: "101%", t: "64%",  l: "-1%",  rgb: "208,225,252", o: 0.45 },
  { w: "92%",  t: "69%",  l: "4%",   rgb: "204,224,253", o: 0.52 },
  { w: "83%",  t: "74%",  l: "8%",   rgb: "201,222,253", o: 0.59 },
  { w: "74%",  t: "79%",  l: "13%",  rgb: "197,220,253", o: 0.66 },
  { w: "65%",  t: "84%",  l: "17%",  rgb: "193,218,253", o: 0.72 },
  { w: "56%",  t: "89%",  l: "22%",  rgb: "190,216,253", o: 0.79 },
  { w: "47%",  t: "95%",  l: "26%",  rgb: "186,215,254", o: 0.86 },
  { w: "38%",  t: "100%", l: "31%",  rgb: "183,213,254", o: 0.93 },
  { w: "30%",  t: "105%", l: "35%",  rgb: "179,211,254", o: 1.00 },
];

export default function PageHero({ title, subtitle }) {
  return (
    <div className="pf-page-hero">
      {/* Decorative ellipses */}
      {ELLIPSE_LAYERS.map((layer, i) => (
        <div
          key={i}
          className="pf-ellipse"
          style={{
            width: layer.w,
            aspectRatio: "4 / 1.1",
            top: layer.t,
            left: layer.l,
            backgroundColor: `rgb(${layer.rgb})`,
            opacity: layer.o,
          }}
        />
      ))}

      {/* Content */}
      <div className="pf-page-hero-content">
        <h1 className="pf-page-hero-h1">{title}</h1>
        {subtitle && <p className="pf-page-hero-sub">{subtitle}</p>}
      </div>
    </div>
  );
}// page hero v1
