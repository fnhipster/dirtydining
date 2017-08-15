class Restaurant < ApplicationRecord

    def full_address
        self.location_address + ", " + self.location_city + " FL, " + self.location_zipcode
    end

end
