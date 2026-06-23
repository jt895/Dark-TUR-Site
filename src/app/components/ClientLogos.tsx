import { motion } from "motion/react";

type Client = {
  name: string;
  category: string;
  logo?: string;
  logoAlt?: string;
  logoClassName?: string;
};

export function ClientLogos() {
  const clients: Client[] = [
    { name: "Australia Post", category: "Brand", logo: "/logos/australia-post.png" },
    { name: "Toyota", category: "Brand and Retail", logo: "/logos/toyota.png" },
    { name: "Ford", category: "Brand and Retail", logo: "/logos/ford.png" },
    { name: "Hyundai", category: "Brand (i20, i45, iCare, Hyundai Trucks)", logo: "/logos/hyundai.png" },
    { name: "Subaru", category: "Brand and Retail", logo: "/logos/subaru.png", logoAlt: "Subaru" },
    { name: "Panasonic", category: "Brand", logo: "/logos/panasonic.png" },
    { name: "Kaplan", category: "Brand", logo: "/logos/kaplan.png" },
    { name: "Stockland", category: "Brand", logo: "/logos/stockland.png" },
    { name: "IAG", category: "Brand", logo: "/logos/iag.png", logoAlt: "IAG" },
    { name: "QBE", category: "Brand", logo: "/logos/qbe.jpeg", logoAlt: "QBE" },
    { name: "SA Lotteries", category: "Brand and Retail", logo: "/logos/sa-lotteries.png" },
    { name: "TAFE Victoria", category: "Brand", logo: "/logos/tafe-victoria.png", logoAlt: "TAFE Victoria" },
    { name: "DFAT Smartraveller", category: "Brand", logo: "/logos/smartraveller.jpeg", logoAlt: "Smartraveller" },
    { name: "Yellowtail", category: "Brand", logo: "/logos/yellowtail.png", logoAlt: "Yellow Tail" },
    { name: "Yalumba Wines", category: "Brand and Retail", logo: "/logos/yalumba.png", logoAlt: "Yalumba" },
    { name: "Accolade Wines", category: "Brand", logo: "/logos/accolade.png", logoAlt: "Accolade Wines" },
    { name: "Caltex Woolworths Petrol JV", category: "Brand", logo: "/logos/caltex.png", logoAlt: "Caltex" },
    { name: "BWS", category: "Brand and Retail", logo: "/logos/bws.png" },
    { name: "Barnardos Australia", category: "Brand", logo: "/logos/barnardos.png", logoAlt: "Barnardos" },
    { name: "Hipages", category: "Brand", logo: "/logos/hipages.png", logoAlt: "hipages" },
    { name: "SnackBrands - Kettle", category: "Brand", logo: "/logos/kettle.png", logoAlt: "Kettle" },
    { name: "SnackBrands - CCs", category: "Brand", logo: "/logos/ccs.jpeg", logoAlt: "CCs" },
    { name: "Millers", category: "Brand and Retail", logo: "/logos/millers.png" },
    { name: "Taubmans", category: "Brand", logo: "/logos/taubmans.png" },
    { name: "ComBank", category: "Credit Cards Brand and Retail", logo: "/logos/commbank.png", logoAlt: "Commonwealth Bank", logoClassName: "max-w-[210px]" },
    { name: "Credit Union SA", category: "Brand", logo: "/logos/credit-union-sa.png" },
    { name: "GM Daewoo", category: "Brand and Retail", logo: "/logos/gm-daewoo.png" },
    { name: "FCMB", category: "Brand Strategy and Implementation", logo: "/logos/fcmb.png" },
    { name: "SA Government", category: "Brand", logo: "/logos/sa-government.png" },
    { name: "Motor Accident Commission", category: "Brand", logo: "/logos/mac.png", logoAlt: "Motor Accident Commission" },
    { name: "AQIS Quarantine Matters", category: "Brand", logo: "/logos/quarantine.png", logoAlt: "Quarantine Matters" },
    { name: "Australian Avocados", category: "Content", logo: "/logos/australian-avocados.jpg", logoAlt: "Australian Avocados" },
    { name: "ECSA", category: "Brand and Campaign", logo: "/logos/ecsa.png" },
    { name: "KU Children Services", category: "Brand", logo: "/logos/ku.png", logoAlt: "KU Children's Services" },
    { name: "Nova Systems", category: "Brand", logo: "/logos/nova.png", logoAlt: "Nova Systems" },
    { name: "OnceDirect", category: "Brand", logo: "/logos/once.jpeg", logoAlt: "OnceDirect" },
    { name: "Petaluma Wines", category: "Brand", logo: "/logos/petaluma.png", logoAlt: "Petaluma" },
    { name: "St Hallett", category: "Brand", logo: "/logos/st-hallett.png", logoAlt: "St Hallett" },
    { name: "Clipsal 500", category: "Brand", logo: "/logos/clipsal-500.jpg", logoAlt: "Clipsal 500 Adelaide" },
    { name: "AMBC", category: "Brand", logo: "/logos/ambc.png" },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-wider text-[var(--text-subtle)] mb-2"
        >
          Trusted by leading organizations
        </motion.h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.02 }}
            className="flex flex-col items-center justify-start group"
          >
            <div className="text-center transition-all duration-300 hover:scale-105 w-full flex flex-col items-center">
              <div className="h-20 md:h-24 mb-3 flex items-center justify-center px-3 w-full">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.logoAlt ?? client.name}
                    className={`max-h-12 md:max-h-14 w-auto max-w-[180px] object-contain ${client.logoClassName ?? ""}`.trim()}
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full" aria-hidden="true" />
                )}
              </div>
              <div className="font-medium text-[var(--text-main)] mb-1 text-sm md:text-base">
                {client.name}
              </div>
              <div className="text-xs text-[var(--text-subtle)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {client.category}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-8 pt-6 border-t border-[var(--border-subtle)]"
      >
        <p className="text-[var(--text-muted)] max-w-3xl mx-auto">
          Strategic communications work across brand development, retail campaigns, content strategy,
          and implementation for organizations spanning automotive, financial services, government,
          retail, wine and spirits, technology, and social sectors.
        </p>
      </motion.div>
    </div>
  );
}
