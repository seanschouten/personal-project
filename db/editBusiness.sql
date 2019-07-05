UPDATE businesses
SET 
    name = ${name},
    city = ${city},
    address = ${address}
WHERE business_id = ${business_id};

select *
FROM businesses
