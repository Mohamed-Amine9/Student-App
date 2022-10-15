package com.example.employeecrud.Config;

import com.example.employeecrud.Entity.Employee;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class myDataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
       /* RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
        HttpMethod [] theUnsupportedActions={HttpMethod.DELETE,HttpMethod.POST};

        // disable HTTP methods for product : PUT , POST ,DELETE
        config.getExposureConfiguration()
                .forDomainType(Employee.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)));*/



    }
}
