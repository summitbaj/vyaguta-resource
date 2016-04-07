package com.lftechnology.vyaguta.resource.service.impl;

import java.util.List;
import java.util.UUID;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.GenericType;

import com.lftechnology.vyaguta.commons.SecurityRequestContext;
import com.lftechnology.vyaguta.commons.http.HttpHelper;
import com.lftechnology.vyaguta.commons.pojo.ResponseData;
import com.lftechnology.vyaguta.commons.util.ArrayUtil;
import com.lftechnology.vyaguta.resource.config.Configuration;
import com.lftechnology.vyaguta.resource.pojo.Employee;
import com.lftechnology.vyaguta.resource.service.EmployeeService;

/**
 * 
 * @author Kailash Bijayananda <kailashraj@lftechnology.com>
 *
 */
public class EmployeeServiceImpl implements EmployeeService {

    private static final String EMPLOYEE_URL = Configuration.instance().getVyagutaCoreUrl() + "employees";

    @Override
    public List<Employee> fetchEmployees(List<UUID> employeeIds) {
        try {
            String token = SecurityRequestContext.getAccessToken();
            String url = EMPLOYEE_URL + "?id=" + ArrayUtil.toCommaSeparated(employeeIds);

            ResponseData<Employee> data = HttpHelper.get(url, token, new GenericType<ResponseData<Employee>>() {
            });

            return data.getData();
        } catch (WebApplicationException e) {
            throw e;
        }
    }

}
